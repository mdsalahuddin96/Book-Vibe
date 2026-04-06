import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadlistBooks from "../../components/readlistbooks/ReadlistBooks";
import WishlistBooks from "../../components/wishlistBooks/WishlistBooks";
// import { useState } from "react";

const BookPage = () => {
  return (
    <div>
      <div className="text-center">
        <button className="btn btn-success">Sort By</button>
      </div>
      <div className="container mx-auto">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadlistBooks></ReadlistBooks>
          </TabPanel>
          <TabPanel>
            <WishlistBooks></WishlistBooks>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookPage;
