import PropTypes from 'prop-types';
import { LoadingState } from '../LoadingState';
import { ErrorState } from '../ErrorState';
import { EmptyState } from '../EmptyState';

const UIState = ({ isLoading, error, isEmpty, children }) => {
  console.log(error);
  if (isLoading) return <LoadingState />;
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
