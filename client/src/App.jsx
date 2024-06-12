import "./App.css";

function App() {
  const TravelItem = ({ title, description, image, category, link }) => {
    return (
      <div className="travel-item">
        <img src={image} alt={title} />
        <div className="travel-item-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="category">{category}</p>
          <a href={link}>อ่านต่อ</a>
        </div>
      </div>
    );
  };

  const travelData = [
    {
      title: "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!",
      description: "วันว่างนี้ไปเที่ยวเกาะช้างกัน...",
      image: "path/to/image1.jpg",
      category: "เกาะ, ทะเล, อุทยาน, ธรรมชาติ, ตลาด",
      link: "#",
    },
    {
      title: "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว",
      description: "BTS สายสีเขียวเปิดใหม่...",
      image: "path/to/image2.jpg",
      category: "คาเฟ่, ร้านอาหาร, จุดถ่ายรูป",
      link: "#",
    },
    {
      title: "เที่ยวทุ่งทานตะวันชลบุรี ได้รูปสวยไม่ต้องไปไกลที่ ไร่ศรีบุรพา",
      description: "นำเสนอไร่ทานตะวันในชลบุรี...",
      image: "path/to/image3.jpg",
      category: "จุดถ่ายรูป, ทุ่งทานตะวัน",
      link: "#",
    },
  ];

  const TravelGuide = () => {
    return (
      <div className="travel-guide">
        <h1>เที่ยวไหนดี</h1>
        <input type="text" placeholder="ค้นหาที่เที่ยว..." />
        {travelData.map((item, index) => (
          <TravelItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            category={item.category}
            link={item.link}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      {/* Start coding here */}
      <TravelGuide />
    </div>
  );
}

export default App;
