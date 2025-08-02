# SK Clothing Store - E-commerce Website

A complete e-commerce solution for a clothing store with order notification system.

## 🛍️ Features

### Customer Features
- **Product Browsing**: Browse through different clothing categories
- **Shopping Cart**: Add items to cart with quantity management
- **Checkout System**: Complete order process with customer information
- **Order Confirmation**: Detailed order confirmation page
- **Responsive Design**: Works on desktop and mobile devices

### Admin Features
- **Order Management**: View and manage all orders
- **Order Notifications**: Real-time email notifications for new orders
- **Order Status Tracking**: Mark orders as processing, shipped, etc.
- **Revenue Tracking**: View total revenue and order statistics

## 📁 File Structure

```
Clothing/
├── index.html                 # Main homepage
├── checkout.html              # Checkout page
├── order-confirmation.html    # Order confirmation page
├── admin-dashboard.html       # Admin dashboard
├── admin-login.html          # Admin login page
├── thankyou.html             # Thank you page
├── hoodie.html               # Hoodie product page
├── jacket.html                # Jacket product page
├── pant.html                  # Pant product page
├── shoes.html                 # Shoes product page
├── tshirt.html               # T-shirt product page
├── README.md                 # This documentation
├── orders.json               # Order storage (auto-generated)
└── Images/                   # Product images
    ├── Hoodie.jpg
    ├── Jacket.jpg
    ├── Pant.jpg
    ├── Shoes.jpg
    ├── Tshirt.jpg
    └── ... (other product images)
```

## 🚀 Setup Instructions

### Prerequisites
- Any modern web browser
- No server setup required (works locally)

### Installation
1. Download all files to your computer
2. Open `index.html` in your web browser
3. For admin access, use `admin-login.html` with password: `admin123`

### Access Points
- **Customer Site**: `index.html`
- **Admin Dashboard**: `admin-dashboard.html`

## 📧 Order Management System

### How it Works
1. Customer places an order through the checkout process
2. Order data is stored locally in the browser
3. Admin can view all orders in the dashboard
4. Order status can be updated and tracked
5. All data persists in browser localStorage

### Order Data Includes
- Order ID and timestamp
- Complete customer information
- Order items with quantities and prices
- Payment method and total amount
- Order status tracking

## 🛒 Product Categories

### Available Products
- **Hoodies**: 4 different styles (Rs. 1,500 - Rs. 2,400)
- **Jackets**: 4 different styles (Rs. 2,499 - Rs. 3,500)
- **T-Shirts**: 4 different styles (Rs. 1,299 - Rs. 1,800)
- **Pants**: 4 different styles (Rs. 1,599 - Rs. 2,200)
- **Shoes**: 4 different styles (Rs. 3,499 - Rs. 4,500)

### Payment Methods
- Cash on Delivery (COD)
- Credit/Debit Card
- eSewa (Nepali digital wallet)

## 🎨 Design Features

### Responsive Design
- Mobile-friendly layout
- Flexible grid system
- Touch-friendly buttons
- Optimized for all screen sizes

### User Experience
- Smooth animations and transitions
- Clear navigation
- Intuitive shopping cart
- Professional checkout process

## 🔧 Technical Details

### Frontend Technologies
- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Local Storage for cart management

### Backend Technologies
- PHP for order processing
- JSON for data storage
- Email notifications via PHP mail()

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📊 Admin Dashboard Features

### Order Management
- View all orders with customer details
- Update order status (New → Processing → Shipped)
- View order statistics and revenue
- Auto-refresh every 30 seconds

### Statistics Display
- Total number of orders
- Number of new orders
- Total revenue generated
- Real-time updates

## 🔒 Security Considerations

### Data Protection
- Customer data is stored locally in JSON format
- No sensitive payment information stored
- Email notifications are sent securely

### Recommendations for Production
- Implement proper database (MySQL/PostgreSQL)
- Add user authentication for admin access
- Use HTTPS for secure data transmission
- Implement proper input validation
- Add CSRF protection

## 📞 Support Information

### Store Details
- **Address**: New Road, Kathmandu, Nepal
- **Email**: support@sk.com
- **Phone**: +977-9828808001
- **Hours**: Sun–Fri, 10:00 AM – 6:00 PM

## 🚀 Future Enhancements

### Planned Features
- User registration and login
- Wishlist functionality
- Product reviews and ratings
- Advanced search and filtering
- Inventory management
- Discount codes and promotions
- Multiple payment gateways
- Order tracking system

### Technical Improvements
- Database integration
- API development
- Mobile app development
- Advanced analytics
- SEO optimization

## 📝 License

This project is created for educational and commercial purposes. All rights reserved.

---

**Note**: This is a complete e-commerce solution with order notification system. The store owner will receive email notifications whenever a customer places an order, allowing for immediate response and order processing. 