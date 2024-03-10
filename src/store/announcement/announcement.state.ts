import { Announcement } from "../../types/announcement";

export interface AnnouncementsState {
  announcements: Announcement[];
  loading: boolean;
  error: string | null;
}

export const initialAnnouncementsState: AnnouncementsState = {
  announcements: [],
  loading: false,
  error: null,
};
