var
React = require('react');

function getStarCode(numStars) {

    var html;
        if (numStars == 0) {

            html = (
                <div>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                </div>
                );
        } else if (numStars == 1) {
            html = (
                <div>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                </div>
                );
        } else if (numStars == 2) {
            html = (
                <div>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                </div>
                );
        } else if (numStars == 3) {
            html = (
                <div>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                </div>
                );
        } else if (numStars == 4) {
            html = (
                <div>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                </div>
                );
        } else {
            html = (
                <div>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                </div>
            );
        }
        return html;
}

module.exports = {getStarCode};