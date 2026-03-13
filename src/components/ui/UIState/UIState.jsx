import PropTypes from 'prop-types';
import { Loading } from '../Loading';
import { ErrorState } from '../ErrorState';
import { EmptyState } from '../EmptyState';

const UIState = ({ isLoading, error, isEmpty, children }) => {
  console.log(error);
  if (isLoading) return <Loading />;
  if (error) return <ErrorState message={error} />;
  if (isEmpty) return <EmptyState />;

  return children;
};

UIState.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  isEmpty: PropTypes.bool,
  children: PropTypes.node,
};

export default UIState;
