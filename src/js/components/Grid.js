var React = require('react');
import BookmarkList from '../components/BookmarkList';
import BookmarkAdder from '../components/BookmarkAdder';

var Grid = React.createClass( {

    render: function() {
        return  (
            <div className="ui grid container">
                <div className="twelve wide column centered">
                    <BookmarkList source="/api/bookmarks"/>
                    <BookmarkAdder/>
                </div>
            </div>
        );
    }
});

module.exports = Grid;
