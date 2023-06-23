
/*

type Video = {
  title: string
  duration: number
  coverUrl: string
}

type Props = {
  items: Array<Video>
}

*/

/*

type Video = {
  title: string
  duration: number
  coverUrl: string
}

type LiveStream = {
  name: string
  previewUrl: string
}

type Props = {
  items: Array<Video | LiveStream>
}

*/

const VideoList = ({ items }) => {
  return (
    <template>
      <ul>
        <template v-for={item in items} key={item.id}>
          {/* it's a video */}
          <Thumbnail v-if={'coverUrl' in item} video={item} />

          {/* But if it's a live stream, and not a video, what can we do with it? */}
        </template>
      </ul>
    </template>
  )
}

const Thumbnail = ({ video }) => {
  return (
    <template>
      <img alt={alt} src={video.coverUrl} />
    </template>
  )
}

export default [VideoList, Thumbnail]
