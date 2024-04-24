document.getElementById('fetchData').addEventListener('click', function() {
    // Placeholder recipient name for demonstration
    const recipientName = "John Doe";
    document.getElementById('recipientName').textContent = recipientName;
  
    // Example structure of data fetched from the backend
    const conversations = [
      { object: "Invoice", recipients: "Alex, Bob", desc: "Regarding payment", date: "2021-04-24" },
      // Add more conversation objects here
    ];
  
    const conversationList = document.getElementById('conversationList');
    conversationList.innerHTML = ""; // Clear existing entries
  
    conversations.forEach(conv => {
      const div = document.createElement('div');
      div.className = 'conversation';
      div.textContent = `${conv.object} ${conv.recipients} ${conv.desc} ${conv.date}`;
      conversationList.appendChild(div);
    });
  });
  