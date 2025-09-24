import React, { useState, useEffect } from "react";
import "../Templates/ViewModal.css";
import { db } from '../config/firebase'; 
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ViewModal = ({ onClose, documentId }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    Availbility: "",
  });
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [originalForm, setOriginalForm] = useState(null);
  const [originalAuthors, setOriginalAuthors] = useState([]);

  // Fetch existing document data
  useEffect(() => {
    const fetchDocument = async () => {
      if (!documentId) {
        setFetchLoading(false);
        return;
      }
      setFetchLoading(true);
      try {
        const docRef = doc(db, "paperAuthordetails", documentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setForm({
            name: data.name || "",
            description: data.description || "",
            Availbility: data.Availbility || "",
          });
          setOriginalForm({
            name: data.name || "",
            description: data.description || "",
            Availbility: data.Availbility || "",
          });
          // Parse authors array [{a1: {name, price}}, ...]
          if (Array.isArray(data.author)) {
            const authorArray = data.author.map(obj => {
              const key = Object.keys(obj)[0];
              return {
                key,
                name: obj[key]?.name || "",
                price: obj[key]?.price || ""
              };
            });
            setAuthors(authorArray);
            setOriginalAuthors(authorArray);
          } else {
            setAuthors([]);
            setOriginalAuthors([]);
          }
        } else {
          setError("Document not found");
        }
      } catch (err) {
        setError("Failed to fetch document");
        console.error("Error fetching document:", err);
      } finally {
        setFetchLoading(false);
      }
    };
    fetchDocument();
  }, [documentId]);

  const updateAuthorField = (index, field, value) => {
    setAuthors(prev => prev.map((a, i) => i === index ? { ...a, [field]: value } : a));
  };
  const addAuthorRow = () => {
    setAuthors(prev => [...prev, { name: "", price: "" }]);
  };
  const removeAuthorRow = (index) => {
    setAuthors(prev => prev.filter((_, i) => i !== index));
  };
  const handleSave = async () => {
    setLoading(true);
    setError("");
    try {
      const docRef = doc(db, "paperAuthordetails", documentId);
      const authorsData = authors.map((a, i) => ({
        [`a${i + 1}`]: { name: a.name || "", price: `${a.price ?? ""}` }
      }));
      await updateDoc(docRef, {
        name: form.name || "",
        description: form.description || "",
        Availbility: form.Availbility || "",
        author: authorsData
      });
      setOriginalForm(form);
      setOriginalAuthors(authors);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to save changes");
      console.error("Error updating document:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => {
    if (originalForm) setForm(originalForm);
    if (originalAuthors) setAuthors(originalAuthors);
    setIsEditing(false);
    setError("");
  };

  if (fetchLoading) {
    return (
      <div className="view-modal-overlay" onClick={onClose}>
        <div className="view-modal-content" onClick={e => e.stopPropagation()}>
          <div className="view-frame">
            <div className="view-loading">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="view-modal-overlay" onClick={onClose}>
      <div className="view-modal-content" onClick={e => e.stopPropagation()}>
        <div className="view-frame">
          <div className="view-div-wrapper">
            <div className="view-text-wrapper">View Document</div>
          </div>
          <div className="view-div">
            <div className="view-div-2">
              <div className="view-div-wrapper-2">
                <div className="view-text-wrapper-2">Name</div>
                {isEditing ? (
                  <input
                    className="view-custom-input"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                ) : (
                  <div className="view-custom-input" style={{ background: "#f5f6fa" }}>{form.name}</div>
                )}
              </div>
              <div className="view-div-wrapper-2">
                <div className="view-text-wrapper-2">Availability</div>
                {isEditing ? (
                  <input
                    className="view-custom-input"
                    value={form.Availbility}
                    onChange={e => setForm({ ...form, Availbility: e.target.value })}
                  />
                ) : (
                  <div className="view-custom-input" style={{ background: "#f5f6fa" }}>{form.Availbility}</div>
                )}
              </div>
              <div className="view-div-wrapper-2">
                <div className="view-text-wrapper-2">Description</div>
                {isEditing ? (
                  <textarea
                    className="view-custom-input"
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                    rows={3}
                  />
                ) : (
                  <div className="view-custom-input" style={{ background: "#f5f6fa" }}>{form.description}</div>
                )}
              </div>
              <div className="view-div-wrapper-2">
                <div className="view-text-wrapper-2">Authors</div>
                <div className="author-cards-container">
                  {authors.length === 0 ? (
                    <div className="no-authors">No authors</div>
                  ) : (
                    authors.map((a, i) => (
                      <div className="author-card" key={i}>
                        <div className="author-card-header">
                          <div className="author-card-title">Author {i + 1}</div>
                          {isEditing && (
                            <button
                              type="button"
                              className="author-card-remove"
                              onClick={() => removeAuthorRow(i)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <div className="author-card-fields">
                          <div className="author-field">
                            <div className="author-label">Name:</div>
                            {isEditing ? (
                              <input
                                value={a.name}
                                className="author-input"
                                onChange={e => updateAuthorField(i, "name", e.target.value)}
                                placeholder="Author Name"
                              />
                            ) : (
                              <div className="author-value">{a.name}</div>
                            )}
                          </div>
                          <div className="author-field">
                            <div className="author-label">Price (₹):</div>
                            {isEditing ? (
                              <input
                                value={a.price}
                                type="number"
                                className="author-input"
                                onChange={e => updateAuthorField(i, "price", e.target.value)}
                                placeholder="Price"
                              />
                            ) : (
                              <div className="author-value">{a.price}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  {isEditing && (
                    <button
                      type="button"
                      className="author-card-add"
                      onClick={addAuthorRow}
                    >
                      + Add Author
                    </button>
                  )}
                </div>
              </div>
            </div>
            {error && <div className="view-error">{error}</div>}
            <div className="view-div-9">
              {isEditing ? (
                <>
                  <div className="view-div-wrapper-7" onClick={handleCancel}>
                    <div className="view-text-wrapper-8">Cancel</div>
                  </div>
                  <div className="view-div-wrapper-7" onClick={handleSave}>
                    <div className="view-text-wrapper-8">{loading ? "Saving..." : "Save"}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="view-div-wrapper-7" onClick={() => setIsEditing(true)}>
                    <div className="view-text-wrapper-8">Edit</div>
                  </div>
                  <div className="view-div-wrapper-7" onClick={onClose}>
                    <div className="view-text-wrapper-8">Close</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
