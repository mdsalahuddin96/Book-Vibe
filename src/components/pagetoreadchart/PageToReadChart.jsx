import { useContext } from "react";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { StoredBookContext } from "../../context/StoredBookContext";

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 100,
};
// #endregion

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;

function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
}

export default function PageToReadChart() {
  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff8042",
    "#00C49F",
    "#FB0100",
    "#23BE0A",
    "#59C6D2",
    "#131313",
  ];
  const { wishlist } = useContext(StoredBookContext);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-10">Books To Read</h1>
      {wishlist.length === 0 ? (
        <div className="bg-base-100 flex justify-center items-center h-screen border border-gray-300 rounded-2xl">
          <h1 className="text-4xl font-bold text-[#424242]">
            No Books in your WIsh List!
          </h1>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={600}>
          <BarChart data={wishlist} margin={margin}>
            <XAxis dataKey="bookName" angle={-45} textAnchor="end" />
            <YAxis />

            <Bar dataKey="totalPages" shape={<TriangleBar />} maxBarSize={150}>
              <LabelList
                dataKey="totalPages"
                position="top"
                fontSize={16}
              ></LabelList>

              {wishlist.map((book, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
