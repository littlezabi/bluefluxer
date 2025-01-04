import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import { useState, useEffect, useContext } from "react";
import Message from "./message";
import Cookies from "js-cookie";
import { Store } from "../context/context";
import Modal from "./modal";
import { WEBSITE_NAME } from "../utils/constants";
export default function Layout({ title, children }: any) {
  const [message, setMessage] = useState<any>(false);
  const { state, dispatch } = useContext<any>(Store);
  const [modal, setModal] = useState<any>(false);
  useEffect(() => {
    if (Cookies.get("message")) {
      setMessage(JSON.parse(Cookies.get("message")));
      Cookies.remove("message");
    }
  }, []);
  useEffect(() => {
    if (state.modal.show) {
      setModal(state.modal);
    } else {
      setModal(false);
    }
  }, [state.modal]);
  return (
    <>
      <Head>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>
          {title ? title + " | " + WEBSITE_NAME : "HOME | " + WEBSITE_NAME}
        </title>
      </Head>
      <div className='App'>
        {message && (
          <Message
            message={message.text}
            variant={message.variant}
            handleClose={() => setMessage(false)}
            closeAfter={message.closeAfter ?? 6}
          />
        )}
        {modal && <Modal />}
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
