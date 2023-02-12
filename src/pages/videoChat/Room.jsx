import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import { usePeer } from "../../context/Peer";
import { useSocket } from "../../context/Providers/Providers";
import './Room'
const Room = () => {
  const { socket } = useSocket();
  const [myStream, setMyStream] = useState(null);
  const [remoteEmailId, setRemoteEmailId] = useState();

  const {
    peer,
    createOffer,
    createAnswer,
    setRemoteAns,
    sendStream,
    remoteStream,
  } = usePeer();

  const handleNewUserJoined = useCallback(
    async (data) => {
      const { emailId } = data;
      console.log("newUser Joined", emailId);
      const offer = await createOffer();
      socket?.emit("call-user", { emailId, offer });
      setRemoteEmailId(emailId);
    },
    [createOffer, socket]
  );
  const handleIncomingCall = useCallback(
    async (data) => {
      const { from, offer } = data;
      console.log("incoming-call from", from, offer);
      const ans = await createAnswer(offer);
      socket?.emit("call-accepted", { emailId: from, ans });
      setRemoteEmailId(from);
    },
    [createAnswer, socket]
  );
  const handleCallAccepted = useCallback(
    async (data) => {
      const { ans } = data;
      console.log("call-got-accepted", ans);
      await setRemoteAns(ans);
    },

    [setRemoteAns]
  );
  const handleNegotiation = useCallback(async () => {
    const localOffer = await peer?.createOffer();

    socket?.emit("call-user", { emailId: remoteEmailId, offer: localOffer });
  }, [peer, remoteEmailId, socket]);

  const getUserMediaStream = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    setMyStream(stream);
  }, []);

  useEffect(() => {
    socket?.on("user-joined", handleNewUserJoined);
    socket?.on("incoming-call", handleIncomingCall);
    socket?.on("call-accepted", handleCallAccepted);
    // return () => {
    //   socket?.off("user-joined", handleNewUserJoined);
    //   socket?.off("incoming-call", handleIncomingCall);
    //   socket?.off("call-accepted", handleCallAccepted);
    // };
  }, [handleIncomingCall, handleNewUserJoined, handleCallAccepted, socket]);

  useEffect(() => {
    peer?.addEventListener("negotiationneeded", handleNegotiation);
    return () => {
      peer?.removeEventListener("negotiationneeded", handleNegotiation);
    };
  }, [handleNegotiation, peer]);

  useEffect(() => {
    getUserMediaStream();
  }, [getUserMediaStream]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-purple-500 mb-3">
        You Connected With {remoteEmailId}
      </h1>
      <button className="btn" onClick={(e) => sendStream(myStream)}>
        send My Video
      </button>
      <div className="player-wrapper">
        <ReactPlayer
        className='react-player'
          width="100%"
          height="100%"
          url={myStream}
          playing
          muted
          controls
        />
        <ReactPlayer url={remoteStream} playing />
      </div>
    </div>
  );
};

export default Room;
