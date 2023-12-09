import { env } from '@/env.mjs'
import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default cloudinary

export type CloudinaryResource = {
  asset_id: string
  public_id: string
  folder: string
  filename: string
  format: string
  version: number
  resource_type: string
  type: string
  created_at: string
  uploaded_at: string
  bytes: number
  backup_bytes: number
  width: number
  height: number
  aspect_ratio: number
  pixels: number
  url: string
  secure_url: string
  status: string
  access_mode: string
  // access_control: null
  etag: string
  // created_by: any
  // uploaded_by: any
}

export type CloudinaryResults = {
  resources: CloudinaryResource[]
  rate_limit_allowed: number
  rate_limit_reset_at: string
  rate_limit_remaining: number
  total_count: number
  time: string
}

export type CloudinaryImage = Pick<
  CloudinaryResource,
  'public_id' | 'url' | 'secure_url' | 'width' | 'height'
>
