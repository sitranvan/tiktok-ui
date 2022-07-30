import PropTypes from 'prop-types';
import { Fragment, memo } from 'react';
import AccountItem from '~/components/AccountItem';
function SearchResult({ searchResult }) {
    return (
        <Fragment>
            {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
        </Fragment>
    );
}

SearchResult.propTypes = {
    searchResult: PropTypes.array,
};
export default memo(SearchResult);
