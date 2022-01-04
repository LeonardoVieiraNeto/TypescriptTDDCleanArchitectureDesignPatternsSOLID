export default {
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnviromment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  typeAcquisition: {
    include: [
      'jest'
    ]
  }
}
