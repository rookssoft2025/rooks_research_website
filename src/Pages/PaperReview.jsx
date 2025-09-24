import React, { useState, useEffect } from "react";
import "../Design/PaperReview.css";
import { PiBellSimpleBold } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import Addnewmodal from "../Templates/Addnewmodal";
import ViewModal from "../Templates/ViewModal";
import CreateUserModal from "../Templates/CreateUserModal";
import { db } from "../config/firebase";
import { collection, getDocs, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { MdOutlineKeyboardArrowRight ,MdOutlineKeyboardArrowLeft} from "react-icons/md";
import NotificationModal from "../Templates/NotificationModal";


export default function PaperReview() {
  const [activeTab, setActiveTab] = useState("Paper");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]); // <-- Store Firestore data
  const [loading, setLoading] = useState(true);
  const [viewItem, setViewItem] = useState(null);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const itemsPerPage = 5;

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "paperAuthordetails"));
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(docs);
      setLoading(false);
    };
    fetchData();
  }, [showModal]); // refetch when modal closes (new data added)

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCreateUserSubmit = async (data) => {
    try {
      const userId = (data.userId || "").trim();
      if (!userId) throw new Error("User ID is required");

      const payload = {
        name: data.name,
        userId: userId,
        phoneNumber: data.phoneNumber,
        password: data.password,
        createdAt: serverTimestamp(),
      };

      await setDoc(doc(db, "clientAccounts", userId), payload);
      setShowCreateUser(false);
    } catch (error) {
      console.error("Failed to create client account:", error);
    }
  };

  
  return (
    <div className="paper-review-container">
      {/* Modal */}
      {showModal && (
        <Addnewmodal onClose={() => setShowModal(false)} />
      )}
      {viewItem && (
        <ViewModal
          documentId={viewItem.id}
          onClose={() => setViewItem(null)}
        />
      )}
      {(
        <CreateUserModal
          isOpen={showCreateUser}
          onClose={() => setShowCreateUser(false)}
          onSubmit={handleCreateUserSubmit}
        />
      )}

      {/* Main Content */}
      <div className={`main-content${(showModal || showCreateUser) ? " blurred" : ""}`}>
        {/* Header */}
        <div className="header">
          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search papers..." className="search-input" />
          </div>
          <div className="header-right">
            <NotificationModal
  isOpen={showNotification}
  onClose={() => setShowNotification(false)}
/>
            <div className="notification-bell" onClick={() => setShowNotification(true)}>
  <PiBellSimpleBold />
  <span className="notification-badge">3</span>
            </div>
            <button className="btn-login" onClick={() => setShowCreateUser(true)}>Create User Login</button>
          </div>
        </div>
        {/* Title and Add New Button */}
        <div className="content-header">
          <button className="btn-add" onClick={() => setShowModal(true)}>
            <FiPlus /> Add New
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab ${activeTab === "Paper" ? "active" : ""}`}
            onClick={() => setActiveTab("Paper")}
          >
            <i className="fas fa-file-alt"></i> Paper
          </button>
          <button 
            className={`tab ${activeTab === "Book" ? "active" : ""}`}
            onClick={() => setActiveTab("Book")}
          >
            <i className="fas fa-book"></i> Book
          </button>
          <button 
            className={`tab ${activeTab === "Patent" ? "active" : ""}`}
            onClick={() => setActiveTab("Patent")}
          >
            <i className="fas fa-certificate"></i> Patent
          </button>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="publication-table">
            <thead>
              <tr>
                <th className="col-name">Name</th>
                <th className="col-availability">Availability</th>
                <th className="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>Loading...</td>
                </tr>
              ) : currentItems.length === 0 ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>No data available.</td>
                </tr>
              ) : (
                currentItems.map((item, index) => (
                  <tr key={item.id || index}>
                    <td className="paper-name">{item.name}</td>
                    <td>
                      <span className={`availability-tag ${item.Availbility ? item.Availbility.toLowerCase() : ""}`}>
                        {item.Availbility || "N/A"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-view"
                        onClick={() => setViewItem(item)}
                      >
                        <i className="fas fa-eye"></i> View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
           <MdOutlineKeyboardArrowLeft />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <MdOutlineKeyboardArrowRight />

          </button>
        </div>
      </div>
    </div>
  );
}