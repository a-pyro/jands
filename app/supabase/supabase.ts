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
      necklaces: {
        Row: {
          created_at: string
          id: number
          src: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          src?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          src?: string | null
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

export type ApiCreation = Database['public']['Tables']['necklaces']['Row']

export type CreationToApi = Database['public']['Tables']['necklaces']['Insert']
