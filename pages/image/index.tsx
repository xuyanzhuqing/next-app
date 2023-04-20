// 会自动识别图片size
import leavesPic from 'assets/img/leaves.png'
import Image from 'next/image'

export default function ImageDemo() {
  return (
    <>
      <p>local image</p>
      <Image src={leavesPic} alt="local leaves image" />
      <p>remote image</p>
      <Image
        src="https://www.freepngimg.com/thumb/halloween/25657-4-halloween-spider-transparent-background.png"
        width="580"
        height="540"
        alt="remote"
      />
    </>
  )
}
