import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import "../Templates/NotificationModal.css";

const notifications = [
    {
        id: 1,
        user: "Subashini",
        message: 'Request To Purchase The Paper "Advanced Quantum Algorithms", Author 2 – ₹Price.',
        time: "10 Minutes Ago",
        state: "read",
    },
    {
        id: 2,
        user: "Subashini",
        message: 'Request To Purchase The Paper "Advanced Quantum Algorithms", Author 5 – ₹Price.',
        time: "10 Minutes Ago",
        state: "read",
    },
    {
        id: 3,
        user: "Subashini",
        message: 'Request To Purchase The Paper "Advanced Quantum Algorithms", Author 45 – ₹Price.',
        time: "10 Minutes Ago",
        state: "read",
    },
    {
        id: 4,
        user: "Subashini",
        message: 'Request To Purchase The Paper "Advanced Quantum Algorithms", Author 76 – ₹Price.',
        time: "10 Minutes Ago",
        state: "unread",
    },
];

const NotificationModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const [activeTab, setActiveTab] = useState("all");

    // Close modal if clicked outside modal container
    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    // Filter notifications based on active tab
    const filteredNotifications = activeTab === "all"
        ? [...notifications].sort((a, b) => (a.state === "unread" ? -1 : 1))
        : notifications.filter((n) => n.state === "unread");

    return (
        <div className="notifications-modal-overlay" onClick={handleOverlayClick}>
            <div ref={modalRef} className="notifications-modal-container">
                <div className="notifications-modal-header">
                    <h2 className="notifications-modal-title">Notifications</h2>
                    <button onClick={onClose} className="notifications-close-button">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="notifications-tab-container">
                    <button
                        className={`notifications-tab-button ${activeTab === "all" ? "active" : "inactive"}`}
                        onClick={() => setActiveTab("all")}
                    >
                        All
                    </button>
                    <button
                        className={`notifications-tab-button ${activeTab === "unread" ? "active" : "inactive"}`}
                        onClick={() => setActiveTab("unread")}
                    >
                        Unread
                    </button>
                </div>
                <div
                    className="notifications-container"
                    onWheel={(e) => e.currentTarget.scrollTo({ top: e.currentTarget.scrollTop + e.deltaY })}
                >
                    {filteredNotifications.map((notif) => (
                        <div
                            key={notif.id}
                            className={`notification-item ${notif.state === "read" ? "read" : "unread"}`}
                        >
                            <div className="notification-header">
                                <p className="notification-user">{notif.user}</p>
                                <span className="notification-time">{notif.time}</span>
                            </div>
                            <p className="notification-message">{notif.message}</p>
                            {notif.state === "unread" && (
                                <div className="notifications-action-buttons">
                                    <button className="notifications-decline-button">
                                        Decline
                                    </button>
                                    <button className="notifications-accept-button">
                                        Accept
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
