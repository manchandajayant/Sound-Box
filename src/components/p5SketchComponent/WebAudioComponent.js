import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography } from "@material-ui/core";

import { showAllSpaces } from "../../Store/actions/spaceActions";
// import sketch from "../../p5sketch/sketch";
import useStyles from "./styles";

const WebAudioComponent = () => {
	const space = useSelector((state) => state.space);
	const classes = useStyles();
	const dispatch = useDispatch();
	const [startA, setstartA] = useState(false);
	const audioCtx = useRef(new AudioContext());

	useEffect(() => {
		dispatch(showAllSpaces());
	}, [dispatch]);

	const audioContextRef = useRef();

	useEffect(() => {
		if (startA) {
			async function getImpulseBuffer(audioCtx, impulseUrl) {
				return fetch(impulseUrl)
					.then((response) => response.arrayBuffer())
					.then((arrayBuffer) =>
						audioCtx.decodeAudioData(arrayBuffer)
					);
			}

			async function getLiveAudio(audioCtx) {
				return navigator.mediaDevices
					.getUserMedia({ audio: true })
					.then((stream) =>
						audioCtx.current.createMediaStreamSource(stream)
					);
			}

			async function init() {
				const input = await getLiveAudio(audioCtx);
				const convolver = audioCtx.current.createConvolver();
				//lets assume there is an mp3 file in root of our project
				convolver.buffer = await getImpulseBuffer(
					audioCtx.current,
					space.file.location
				);

				input.connect(convolver).connect(audioCtx.current.destination);
			}

			init();
		}
	}, [startA]);

	useEffect(() => {
		return () => audioCtx.current.close();
	}, []);

	const startAudio = () => {
		setstartA(true);
	};

	return (
		<div className={classes.sketch}>
			<Typography variant="subtitle1" className={classes.description}>
				Please Use Headphones to avoid a feedback loop
			</Typography>
			<button onClick={startAudio}>Click to play</button>
		</div>
	);
};

export default WebAudioComponent;
