import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

function newMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetup) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  }
  return (
  <Fragment>
    <Head>
        <title>Add Meetups</title>
        <meta name="description" content="Add your own meetups!" />
      </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>);
}

export default newMeetupPage;
