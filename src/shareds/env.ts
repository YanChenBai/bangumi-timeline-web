const baseUrl = import.meta.env['VITE_BASE_URL'] as string | undefined
if (!baseUrl) throw new Error('VITE_BASE_URL is not defined')

export { baseUrl }
