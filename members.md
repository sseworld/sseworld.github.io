---
layout: page
sidebar: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKzwoARsCaHJGLlSjSH1KxvH5BsXayEizXYzyEbZKs-u52RQHU=s288-c-no',
    name: 'SSE World',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/sseworld' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKzwoARsCaHJGLlSjSH1KxvH5BsXayEizXYzyEbZKs-u52RQHU=s288-c-no',
    name: 'SSE Official',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ssewofficial' },
      // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
