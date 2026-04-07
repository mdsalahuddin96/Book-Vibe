import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadlistBooks from "../../components/readlistbooks/ReadlistBooks";
import WishlistBooks from "../../components/wishlistBooks/WishlistBooks";
import { useState } from "react";
// import { useState } from "react";

const BookPage = () => {
  const [sortby, setSortby]=useState('')
  return (
    <div>
      <div className="flex justify-center items-center mt-5 mb-10">
        <div className="dropdown dropdown-start ">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] rounded-md border-none text-white">
            Sort By: {sortby} ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={()=>setSortby('pages')}>Pages</button>
            </li>
            <li>
              <button onClick={()=>setSortby('rating')}>Rating</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadlistBooks sortby={sortby}></ReadlistBooks>
          </TabPanel>
          <TabPanel>
            <WishlistBooks sortby={sortby}></WishlistBooks>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookPage;
