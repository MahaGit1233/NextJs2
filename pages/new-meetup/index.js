import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function newMeetupPage() {
  function addMettupHandler(enteredMeetup) {
    console.log(enteredMeetup);
  }
  return <NewMeetupForm onAddMeetup={addMettupHandler} />;
}

export default newMeetupPage;
