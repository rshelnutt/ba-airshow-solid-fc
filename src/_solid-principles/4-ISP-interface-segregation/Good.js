
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
          <Thumbnail v-if={'coverUrl' in item} coverUrl={item.coverUrl} />

          {/* it's a live stream */}
          <Thumbnail v-else coverUrl={item.previewUrl} />
        </template>
      </ul>
    </template>
  )
}

const Thumbnail = ({ coverUrl }) => {
  return (
    <template>
      <img alt={alt} src={coverUrl} />
    </template>
  )
}

export default [VideoList, Thumbnail]
