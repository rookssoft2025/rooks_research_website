import React, { useState } from "react";
import "../Templates/Addnewmodal.css";
import { db } from '../config/firebase'; 
import { collection, doc, setDoc, getDocs } from "firebase/firestore";

const Addnewmodal = ({ onClose }) => {
    const [form, setForm] = useState({
        name: "",
        author: "",
        price: "",
        description: ""
    });
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Helper to generate next PAxxx id
    const generateDocId = async () => {
        const snapshot = await getDocs(collection(db, "paperAuthordetails"));
        const ids = snapshot.docs.map(doc => doc.id).filter(id => /^PA\d+$/.test(id));
        const maxNum = ids.length
            ? Math.max(...ids.map(id => parseInt(id.replace("PA", ""), 10)))
            : 0;
        return `PA${String(maxNum + 1).padStart(3, "0")}`;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Add author to list
    const handleAddAuthor = (e) => {
        e.preventDefault();
        if (!form.author || !form.price) return;
        setAuthors([
            ...authors,
            { name: form.author, price: form.price }
        ]);
        setForm({ ...form, author: "", price: "" });
    };

    const handleRemoveAuthor = (idx) => {
        setAuthors(authors.filter((_, i) => i !== idx));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const docId = await generateDocId();
            const data = {
                name: form.name,
                description: form.description,
                Availbility: "Available", // <-- Added status
                author: authors.map((a, i) => ({ [`a${i+1}`]: { name: a.name, price: a.price } }))
            };
            await setDoc(doc(collection(db, "paperAuthordetails"), docId), data);
            setLoading(false);
            onClose();
        } catch (err) {
            setError("Failed to save. Try again.");
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="frame">
                    <div className="div-wrapper">
                        <div className="text-wrapper">Add New</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="div">
                            <div className="div-2">
                                <div className="div-wrapper-2">
                                    <div className="text-wrapper-2">Name</div>
                                    <input
                                        className="custom-input"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter Name"
                                        required
                                    />
                                </div>
                                <div className="frame-wrapper">
                                    <div className="div-3">
                                        <div className="div-4">
                                            <div className="div-5">
                                                <div className="div-4">
                                                    <div className="div-6">
                                                        <div className="div-wrapper-3">
                                                            <div className="text-wrapper-3">Author</div>
                                                            <input
                                                                className="custom-input"
                                                                type="text"
                                                                name="author"
                                                                value={form.author}
                                                                onChange={handleChange}
                                                                placeholder="Enter Author"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="div-5">
                                                        <div className="div-7">
                                                            <div className="div-wrapper-3">
                                                                <div className="text-wrapper-3">Price</div>
                                                                <input
                                                                    className="custom-input"
                                                                    type="number"
                                                                    name="price"
                                                                    value={form.price}
                                                                    onChange={handleChange}
                                                                    placeholder="Enter Price"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Remove ? and - symbols */}
                                        {/* Add button */}
                                        <div className="div-8" style={{ cursor: "pointer" }} onClick={handleAddAuthor}>
                                            <div className="plus">+</div>
                                            <div className="text-wrapper-6">Add</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Show authors table if any */}
                                {authors.length > 0 && (
                                    <div style={{
                                        margin: "16px 0",
                                        background: "#f5f6fa",
                                        borderRadius: "8px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                                        padding: "16px"
                                    }}>
                                        <table style={{
                                            width: "100%",
                                            borderCollapse: "separate",
                                            borderSpacing: "0",
                                            background: "#fff",
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
                                        }}>
                                            <thead style={{ background: "#e0e7ef" }}>
                                                <tr>
                                                    <th style={{ padding: "8px", color: "#333", fontWeight: 600 }}>#</th>
                                                    <th style={{ padding: "8px", color: "#333", fontWeight: 600 }}>Author</th>
                                                    <th style={{ padding: "8px", color: "#333", fontWeight: 600 }}>Price</th>
                                                    <th style={{ padding: "8px", color: "#333", fontWeight: 600 }}>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {authors.map((a, i) => (
                                                    <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                                                        <td style={{ padding: "8px", textAlign: "center" }}>{i+1}</td>
                                                        <td style={{ padding: "8px" }}>{a.name}</td>
                                                        <td style={{ padding: "8px" }}>{a.price}</td>
                                                        <td style={{ padding: "8px", textAlign: "center" }}>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveAuthor(i)}
                                                                style={{
                                                                    background: "#ff4d4f",
                                                                    color: "#fff",
                                                                    border: "none",
                                                                    borderRadius: "4px",
                                                                    padding: "4px 10px",
                                                                    cursor: "pointer"
                                                                }}
                                                            >
                                                                Remove
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                                <div className="div-wrapper-6">
                                    <div className="text-wrapper-7">Description</div>
                                    <textarea
                                        className="custom-input"
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Enter Description"
                                        rows={3}
                                        required
                                    />
                                </div>
                            </div>
                            {error && <div style={{ color: "red", margin: "8px 0" }}>{error}</div>}
                            <div className="div-9">
                                <div className="div-wrapper-7" onClick={onClose}>
                                    <div className="text-wrapper-8">Cancel</div>
                                </div>
                                <div className="div-wrapper-8">
                                    <button
                                        type="submit"
                                        className="text-wrapper-9"
                                        disabled={loading || authors.length === 0}
                                        style={{
                                            background: "none",
                                            border: "none",
                                            color: "inherit",
                                            font: "inherit",
                                            cursor: "pointer",
                                            padding: 0
                                        }}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Addnewmodal;