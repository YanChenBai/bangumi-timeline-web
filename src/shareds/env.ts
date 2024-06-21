let baseUrl = import.meta.env['VITE_BASE_URL'] as string | undefined
if (!baseUrl) throw new Error('VITE_BASE_URL is not defined')
if (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1)
export { baseUrl }
