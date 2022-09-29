import React from "react";

function CommentSection() {
  return (
    <div className="comments-container">
      <div className="comment-section">
        <div className="comment-inputs">
          <label for="Rating">Rate our service</label>

          <select name="Rating" id="cars">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Please Enter Your Name" />
          <label htmlFor="review">Review</label>
          <input type="text" name="review" placeholder="Write Your Review" />
        </div>
        <div className="user-review-section">
            Name :
            Rating :
            Review
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
