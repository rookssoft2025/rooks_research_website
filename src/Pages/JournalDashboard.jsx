
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { db } from '../config/firebase'; 
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import "../Design/jTeam.css";

const JournalDashboard = () => {
  const [teamId] = useState('JTEAM-2023-0456');
  const [clients, setClients] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [newClient, setNewClient] = useState({
    clientId: '',
    email: '',
    paperName: '',
    status: 'Draft',
    file: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Journalteam_Details'));
        const clientsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setClients(clientsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clients: ", error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleEdit = (client) => {
    setCurrentClient(client);
    setIsEditModalOpen(true);
  };

  const handleSave = async (client) => {
    try {
      const clientRef = doc(db, 'Journalteam_Details', client.id);
      await updateDoc(clientRef, {
        clientId: client.clientId,
        email: client.email,
        paperName: client.paperName,
        status: client.status,
        file: client.file
      });
   
      setClients(clients.map(c => c.id === client.id ? client : c));
      alert('Client updated successfully!');
    } catch (error) {
      console.error("Error updating client: ", error);
      alert('Error updating client');
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await handleSave(currentClient);
    setIsEditModalOpen(false);
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'Journalteam_Details'), newClient);
      setClients([...clients, { ...newClient, id: docRef.id }]);
      setIsAddModalOpen(false);
      setNewClient({
        clientId: '',
        email: '',
        paperName: '',
        status: 'Draft',
        file: ''
      });
      alert('Client added successfully!');
    } catch (error) {
      console.error("Error adding client: ", error);
      alert('Error adding client');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="journal-dashboard">
      <header className="dashboard-header">
        <h1>Journal Team Dashboard</h1>
        <div className="team-info">
          <span>Team ID: {teamId}</span>
          <span>{new Date().toLocaleString()}</span>
        </div>
      </header>

      <div className="dashboard-actions">
        <button 
          className="add-client-btn"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add New Client
        </button>
      </div>

      <div className="clients-table-container">
        <table className="clients-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Client ID</th>
              <th>Email</th>
              <th>Paper Name</th>
              <th>Paper Status</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={client.id}>
                <td>{index + 1}</td>
                <td>{client.clientId}</td>
                <td>{client.email}</td>
                <td>{client.paperName}</td>
                <td>{client.status}</td>
                <td>
                  <a href={`/files/${client.file}`} download>
                    {client.file}
                  </a>
                </td>
                <td>
                  <button 
                    className="edit-btn"
                    onClick={() => handleEdit(client)}
                  >
                    Edit
                  </button>
                  <button 
                    className="save-btn"
                    onClick={() => handleSave(client)}
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

 
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Edit Client Details</h2>
        {currentClient && (
          <form onSubmit={handleEditSubmit}>
            <div className="form-group">
              <label>Client ID</label>
              <input 
                type="text" 
                value={currentClient.clientId}
                onChange={(e) => setCurrentClient({...currentClient, clientId: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={currentClient.email}
                onChange={(e) => setCurrentClient({...currentClient, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Paper Name</label>
              <input 
                type="text" 
                value={currentClient.paperName}
                onChange={(e) => setCurrentClient({...currentClient, paperName: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Paper Status</label>
              <select
                value={currentClient.status}
                onChange={(e) => setCurrentClient({...currentClient, status: e.target.value})}
              >
                <option value="Draft">Draft</option>
                <option value="Submitted">Submitted</option>
                <option value="Under Review">Under Review</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="form-group">
              <label>File</label>
              <input 
                type="file" 
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setCurrentClient({ ...currentClient, file: file.name });
                  }
                }}
              />
            </div>
            <div className="modal-actions">
              <button type="button" onClick={() => setIsEditModalOpen(false)}>
                Cancel
              </button>
              <button type="submit">Save Changes</button>
            </div>
          </form>
        )}
      </Modal>


      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Add New Client</h2>
        <form onSubmit={handleAddSubmit}>
          <div className="form-group">
            <label>Client ID</label>
            <input 
              type="text" 
              value={newClient.clientId}
              onChange={(e) => setNewClient({...newClient, clientId: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={newClient.email}
              onChange={(e) => setNewClient({...newClient, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Paper Name</label>
            <input 
              type="text" 
              value={newClient.paperName}
              onChange={(e) => setNewClient({...newClient, paperName: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Paper Status</label>
            <select
              value={newClient.status}
              onChange={(e) => setNewClient({...newClient, status: e.target.value})}
            >
              <option value="Draft">Draft</option>
              <option value="Submitted">Submitted</option>
              <option value="Under Review">Under Review</option>
              <option value="Approved">Approved</option>
            </select>
          </div>
          <div className="form-group">
            <label>File</label>
            <input 
              type="file" 
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setNewClient({ ...newClient, file: file.name });
                }
              }}
            />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </button>
            <button type="submit">Add Client</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default JournalDashboard;