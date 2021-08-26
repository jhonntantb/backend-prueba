import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "./../../components/Footer/Footer";
import Scroll from "../../components/Scroll/Scroll";

function Home() {
  const items = [
    {
      image_url:
        "https://images.unsplash.com/photo-1549558549-415fe4c37b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHwxfHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080",
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1578922180039-6c13a4671d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHwzfHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080",
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1569061831972-d1ed3635136e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTA2ODZ8MHwxfHNlYXJjaHw0fHxwYWlzYWplc3xlbnwwfHx8fDE2MjgxMTEwMzA&ixlib=rb-1.2.1&q=80&w=1080",
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="text-center">PG Merceria</h1>
        <hr />
        <Carrousel images={items} />
      </div>
      <Scroll />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
