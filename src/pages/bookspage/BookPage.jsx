
import { Outlet } from 'react-router';
import BookDetails from '../../components/bookDetails/BookDetails';
const BookPage = () => {
    
    
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default BookPage;