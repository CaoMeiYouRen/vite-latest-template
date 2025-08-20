import { defineConfig } from 'eslint/config'
import cmyr from 'eslint-config-cmyr/vue'

export default defineConfig([cmyr, {
    files: ['**/*.{vue,ts,js}'],
    rules: {
        '@typescript-eslint/no-empty-object-type': 1,
    },
}])
