/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	testPathIgnorePatterns: ["build"],
	collectCoverage: true,
	collectCoverageFrom: ["./src/**", "!./src/index.ts"],
};
