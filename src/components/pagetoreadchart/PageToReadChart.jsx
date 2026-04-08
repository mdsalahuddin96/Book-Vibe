import { useLoaderData } from "react-router";
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

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
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F','#FB0100','#23BE0A','#59C6D2','#131313'];
  const books = useLoaderData();
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart data={books} margin={margin}>
        <XAxis dataKey="bookName" angle={-45} textAnchor="end" />
        <YAxis />

        <Bar dataKey="totalPages" shape={<TriangleBar />}>
          <LabelList
            dataKey="totalPages"
            position="top"
            fill="#000"
            fontSize={12}
          ></LabelList>
          {colors.map((color,index) => (
            <Cell key={index} fill={color}/>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
