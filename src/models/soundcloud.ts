export interface ScSession {
    dialog_id?: string;
    error?: string;
    error_description?: string;
    oauth_token?: string;
}

export interface ScActivityCollection {
    collection: any[];
    future_href: string;
    next_href: string;
}

export type ScObject = ScTrack;

export interface ScActivity {
    type: string;
    origin?: ScObject;
    tags?: string;
    created_at: Date;
}

export interface ScTrack {
    id: number;
    title: string;
    uri: string;
    artwork_url?: string;
    attachments_uri?: string;
    bpm?: number;
    comment_count: number;
    commentable: boolean;
    description?: string;
    download_count: number;
    downloadable: boolean;
    duration: number;
    embeddable_by?: string;
    favoritings_count: number;
    genre: string;
    isrc?: string;
    key_signature?: string;
    kind?: string;
    label_id?: number;
    label_name?: string;
    created_at: Date;
    last_modified: Date;
    license?: string;
    likes_count: number;
    original_content_size: number;
    original_format: string;
    permalink: string;
    permalink_url: string;
    playback_count: number;
    purchase_title?: string;
    purchase_url: string;
    release?: string;
    release_day?: string;
    release_month?: string;
    release_year?: string;
    reposts_count: number;
    sharing: string;
    state: string;
    stream_url?: string;
    streamable: boolean;
    tag_list?: string;
    track_type?: string;
    user?: ScUser;
    user_favorite?: string;
    user_id?: number;
    user_playback_count?: number;
    user_uri?: string;
    video_url?: string;
    waveform_url?: string;
}

export interface ScUser {
    id: number;
    first_name: string;
    last_name: string;
    full_name: string;
    username: string;
    website?: string;
    website_title?: string;
    permalink: string;
    permalink_url: string;
    uri: string;
    myspace_name?: string;
    avatar_url: string;
    kind: string;
    online: boolean;
    plan: string;
    locale?: string;
    city?: string;
    country?: string;
    description?: string;
    discogs_name?: string;
    followers_count: number;
    followings_count: number;
    playlist_count: number;
    private_playlists_count: number;
    private_tracks_count: number;
    public_favorites_count: number;
    track_count: number;
    upload_seconds_left: number;
    primary_email_confirmed: boolean;
    last_modified: Date;
    quota: ScQuota;
    subscriptions: any[],
}

export interface ScQuota {
    unlimited_upload_quota: boolean;
    upload_seconds_left: number;
    upload_seconds_used: number;
}
