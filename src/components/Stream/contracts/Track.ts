import { ScTrack } from "../../../models/soundcloud";

export interface Track {
    id: number;
    title: string;
    stream_url?: string;
}

export function trackFromScTrack(track: ScTrack): Track {
	return {
		id: track.id,
		title: track.title,
		stream_url: track.stream_url,
	};
}
