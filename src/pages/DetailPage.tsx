import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();

  return <div>#{id} Issue Page</div>;
};

export default DetailPage;
