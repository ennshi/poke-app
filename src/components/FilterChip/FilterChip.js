import React from 'react';
import Chip from '@material-ui/core/Chip';
import {addSearchFilter, resetSearch} from '../../redux/actions/search';
import {CHIP_TEXT, COLORS} from '../../constants/colors';
import {setTextColor} from '../../utils/randomColor';

export default ({chip: {label, color}, type, filter, dispatch, searchName}) => {
    const isApplied = filter ? filter.value === label : !!searchName;
    const handleClick = () => {
        return isApplied ?
            null :
            dispatch(
                addSearchFilter({
                    property: type,
                    value: label,
                    color: color
                })
            );
    };
    return (
        <Chip
            label={label}
            clickable
            style={{
                backgroundColor: `${color}`,
                margin: '3px',
                color: setTextColor(color, COLORS, CHIP_TEXT, COLORS.WHITE),
                border: label === 'white' && `solid 2px ${CHIP_TEXT}`,
                letterSpacing: '1px'
            }}
            onClick={handleClick}
            onDelete={isApplied ? () => (dispatch(resetSearch())) : null}
        />);
};
