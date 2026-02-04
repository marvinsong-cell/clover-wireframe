export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          nickname: string;
          gender: 'male' | 'female';
          birth_date: string;
          region: string;
          job_type: string | null;
          company: string | null;
          education: string | null;
          height: number | null;
          drinking: string | null;
          smoking: string | null;
          religion: string | null;
          interests: string[] | null;
          bio: string | null;
          photos: string[] | null;
          clover_score: number;
          is_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          nickname: string;
          gender: 'male' | 'female';
          birth_date: string;
          region: string;
          job_type?: string | null;
          company?: string | null;
          education?: string | null;
          height?: number | null;
          drinking?: string | null;
          smoking?: string | null;
          religion?: string | null;
          interests?: string[] | null;
          bio?: string | null;
          photos?: string[] | null;
          clover_score?: number;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          nickname?: string;
          gender?: 'male' | 'female';
          birth_date?: string;
          region?: string;
          job_type?: string | null;
          company?: string | null;
          education?: string | null;
          height?: number | null;
          drinking?: string | null;
          smoking?: string | null;
          religion?: string | null;
          interests?: string[] | null;
          bio?: string | null;
          photos?: string[] | null;
          clover_score?: number;
          is_verified?: boolean;
          updated_at?: string;
        };
      };
      match_actions: {
        Row: {
          id: string;
          from_user_id: string;
          to_user_id: string;
          action: 'like' | 'pass';
          created_at: string;
        };
        Insert: {
          id?: string;
          from_user_id: string;
          to_user_id: string;
          action: 'like' | 'pass';
          created_at?: string;
        };
        Update: {
          action?: 'like' | 'pass';
        };
      };
      matches: {
        Row: {
          id: string;
          user1_id: string;
          user2_id: string;
          matched_at: string;
        };
        Insert: {
          id?: string;
          user1_id: string;
          user2_id: string;
          matched_at?: string;
        };
        Update: never;
      };
      chat_rooms: {
        Row: {
          id: string;
          match_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          match_id: string;
          created_at?: string;
        };
        Update: never;
      };
      messages: {
        Row: {
          id: string;
          room_id: string;
          sender_id: string;
          content: string;
          read_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          room_id: string;
          sender_id: string;
          content: string;
          read_at?: string | null;
          created_at?: string;
        };
        Update: {
          read_at?: string | null;
        };
      };
    };
  };
}
