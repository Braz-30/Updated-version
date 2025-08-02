// Simple Notification System for SK Clothing Store (No PHP Required)

class OrderNotificationSystem {
    constructor() {
        this.notifications = JSON.parse(localStorage.getItem('orderNotifications') || '[]');
        this.init();
    }

    init() {
        // Create notification container if it doesn't exist
        if (!document.getElementById('notification-container')) {
            this.createNotificationContainer();
        }
    }

    createNotificationContainer() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
        `;
        document.body.appendChild(container);
    }

    // Add a new order notification
    addNotification(orderData) {
        const notification = {
            id: Date.now(),
            orderId: orderData.orderId,
            customerName: `${orderData.customer.firstName} ${orderData.customer.lastName}`,
            total: orderData.total,
            timestamp: new Date().toISOString(),
            read: false
        };

        this.notifications.unshift(notification);
        localStorage.setItem('orderNotifications', JSON.stringify(this.notifications));
        
        // Show notification popup
        this.showNotificationPopup(notification);
        
        // Update admin dashboard if it's open
        this.updateAdminDashboard();
    }

    showNotificationPopup(notification) {
        const container = document.getElementById('notification-container');
        const popup = document.createElement('div');
        popup.className = 'order-notification';
        popup.style.cssText = `
            background: #4CAF50;
            color: white;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease-out;
            cursor: pointer;
        `;

        popup.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px;">🛍️ New Order Received!</div>
            <div style="font-size: 14px;">
                <div><strong>Order ID:</strong> ${notification.orderId}</div>
                <div><strong>Customer:</strong> ${notification.customerName}</div>
                <div><strong>Total:</strong> Rs. ${notification.total.toLocaleString()}</div>
                <div style="font-size: 12px; opacity: 0.8;">
                    ${new Date(notification.timestamp).toLocaleString()}
                </div>
            </div>
        `;

        // Add animation styles
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        container.appendChild(popup);

        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (popup.parentNode) {
                popup.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => {
                    if (popup.parentNode) {
                        popup.parentNode.removeChild(popup);
                    }
                }, 300);
            }
        }, 10000);

        // Click to mark as read
        popup.addEventListener('click', () => {
            notification.read = true;
            localStorage.setItem('orderNotifications', JSON.stringify(this.notifications));
            popup.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.parentNode.removeChild(popup);
                }
            }, 300);
        });
    }

    updateAdminDashboard() {
        // If admin dashboard is open, refresh it
        if (window.location.pathname.includes('admin-dashboard.html')) {
            if (typeof loadOrders === 'function') {
                loadOrders();
            }
        }
    }

    // Get all notifications
    getNotifications() {
        return this.notifications;
    }

    // Mark notification as read
    markAsRead(notificationId) {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification) {
            notification.read = true;
            localStorage.setItem('orderNotifications', JSON.stringify(this.notifications));
        }
    }

    // Clear all notifications
    clearAll() {
        this.notifications = [];
        localStorage.setItem('orderNotifications', JSON.stringify(this.notifications));
    }

    // Get unread count
    getUnreadCount() {
        return this.notifications.filter(n => !n.read).length;
    }
}

// Initialize notification system
window.orderNotificationSystem = new OrderNotificationSystem(); 