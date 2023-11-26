export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      about: {
        Row: {
          created_at: string
          id: number
          src: string
        }
        Insert: {
          created_at?: string
          id?: number
          src: string
        }
        Update: {
          created_at?: string
          id?: number
          src?: string
        }
        Relationships: []
      }
      customizations: {
        Row: {
          created_at: string
          id: number
          src: string
        }
        Insert: {
          created_at?: string
          id?: number
          src: string
        }
        Update: {
          created_at?: string
          id?: number
          src?: string
        }
        Relationships: []
      }
      earings: {
        Row: {
          created_at: string
          id: number
          src: string
        }
        Insert: {
          created_at?: string
          id?: number
          src: string
        }
        Update: {
          created_at?: string
          id?: number
          src?: string
        }
        Relationships: []
      }
      everythingelse: {
        Row: {
          created_at: string
          id: number
          src: string
        }
        Insert: {
          created_at?: string
          id?: number
          src: string
        }
        Update: {
          created_at?: string
          id?: number
          src?: string
        }
        Relationships: []
      }
      necklaces: {
        Row: {
          created_at: string
          id: number
          src: string
        }
        Insert: {
          created_at?: string
          id?: number
          src: string
        }
        Update: {
          created_at?: string
          id?: number
          src?: string
        }
        Relationships: []
      }
      rings: {
        Row: {
          created_at: string
          id: number
          src: string
        }
        Insert: {
          created_at?: string
          id?: number
          src: string
        }
        Update: {
          created_at?: string
          id?: number
          src?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type ApiCreation = Database['public']['Tables']['about']['Row']
