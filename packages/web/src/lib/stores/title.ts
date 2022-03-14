import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export const title:Writable<string | undefined> = writable(undefined)

export const siteTitle:Writable<string | undefined> = writable(undefined)