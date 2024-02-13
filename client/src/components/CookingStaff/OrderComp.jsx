import React from 'react';

const OrderComp = ({ order }) => {
  // Function to determine the prefix based on the service type ID
  const getServiceTypePrefix = () => {
    switch (order.service_type_id) {
      case 1:
        return 'H'; // Hotel
      case 2:
        return 'C'; // Cafe
      case 3:
        return 'R'; // Restaurant
      default:
        return ''; // Default empty prefix
    }
  };

  // Construct the table or room number with the appropriate prefix
  const tableOrRoomNumber = <strong>{getServiceTypePrefix()}{order.table_or_room_number}</strong>;

 // Function to group items by order_id
const groupItemsByOrderId = (items) => {
  const groupedItems = {};
  if (items) {
    items.forEach((item) => {
      if (!groupedItems[item.order_id]) {
        groupedItems[item.order_id] = [];
      }
      groupedItems[item.order_id].push(item.item_name);
    });
  }
  return groupedItems;
};


  // Group items by order_id
  const groupedItems = groupItemsByOrderId(order.items);

  // Render items list
  const itemsList = order.items && order.items.length > 0 ? (
    Object.keys(groupedItems).map((orderId) => (
      <div key={orderId}>
        <h4>Order ID: {orderId}</h4>
        <ul className="list-disc ml-4">
          {groupedItems[orderId].map((itemName, index) => (
            <li key={index}>{itemName}</li>
          ))}
        </ul>
      </div>
    ))
  ) : null;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative border border-gray-300">
      <button className="bg-green-500 text-white py-1 px-2 rounded-md absolute top-2 right-2 hover:bg-green-600 transition duration-300 ease-in-out">
        Accept
      </button>
      <h2 className="text-lg font-bold mb-2 text-gray-800">Order ID: {order.order_id}</h2>
      <p className="mb-2 text-sm text-gray-700">Customer Name: <strong className="font-bold">{order.customer_name}</strong></p>
      <p className="mb-2 text-sm text-gray-700">Customer Phone Number: {order.customer_phone_number}</p>
      <p className="mb-2 text-sm text-gray-700">Table or Room Number: {tableOrRoomNumber}</p>
      <p className="mb-2 text-sm text-gray-700">Total Cost: ₹{order.total_cost}</p>
      <p className="mb-2 text-sm text-gray-700">Items: {itemsList}</p>
      
    </div>
  );
};

export default OrderComp;
