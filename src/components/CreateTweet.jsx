import "./CreateTweet.css";
import Avatar from "./Avatar";
import TwittButton from "./TwittButton";
import SmallIcon from "./SmallIcon";
function CreateTweet() {
  return (
    <>
      <div className="tweet-form px-3 pt-2 pb-3 d-flex border-bottom">
        <Avatar></Avatar>
        <div className="flex-fill overflow-auto">
          <div className="tweet-content overflow-auto">
            <div id="new-tweet-content">
              <textarea
                className="w-100"
                name="tweetContent"
                id="tweetContent"
                rows="3"
                spellCheck="false"
                placeholder="What's happening?"
                maxLength="140"
                resize="none"
              ></textarea>
            </div>
          </div>
          <hr className="mt-2 mb-0" />
          <div className="form-footer pt-3 d-flex justify-content-between align-items-end">
            <div>
              <SmallIcon icon="picture" />
              <SmallIcon icon="gif" />
              <SmallIcon icon="stadistics" />
              <SmallIcon icon="smiley" />
              <SmallIcon icon="calendar" />
            </div>
            <div>
              <TwittButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTweet;
