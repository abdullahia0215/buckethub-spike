import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MyBucket() {
  const userBucket = useSelector((store) => store.myBucketReducer);

  let [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MY_BUCKET" });
  }, []);

  const completeItem = (itemID) => {
    if (
      confirm(
        "Are you sure you want to mark this complete? You will not be able to change it's status back to incomplete."
      ) === true
    ) {
      console.log("item completed");
      alert("congrats! you ticked another off the list :D");
      dispatch({ type: "COMPLETE_USER_BUCKET_ITEM", payload: itemID });
    } else {
      return;
    }
  };
  const deleteItem = (itemID) => {
    if (confirm("Are you sure you'd like to delete this item?") === true) {
      console.log("item delete");
      dispatch({ type: "DELETE_USER_BUCKET_ITEM", payload: itemID });
    } else {
      return;
    }
  };

  const addItem = () => {
    dispatch({
      type: "ADD_USER_BUCKET_ITEM",
      payload: input,
    });
  };

  const handleBucketInput = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  return (
    <>
      <h1>My Bucket</h1>
      <form onSubmit={addItem}>
        <input
          value={input}
          onChange={handleBucketInput}
          placeholder="What's next?"
          required
        ></input>
        <button>Add To Bucket List</button>
      </form>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
          </tr>
          {userBucket.map((userItem) => (
            <tr key={userItem.id}>
              <td>{userItem.bucket_list_item}</td>
              <td>
                <button onClick={() => completeItem(userItem.id)}>
                  Complete
                </button>
              </td>

              <td>
                <button onClick={() => deleteItem(userItem.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
