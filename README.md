# Apollo Store

The Apollo Store is a part of the Apollo Client, a powerful state management library for managing GraphQL data in frontend applications. The Apollo Store acts as a normalized in-memory cache that stores data fetched from a GraphQL server, enabling efficient data retrieval and management in your application.

## Key Features of Apollo Store
 	1.	Normalized Data Storage:
	•	The store saves GraphQL data in a normalized format, which means it breaks down complex query results into individual objects and stores them by unique identifiers (e.g., id or _id).
	•	This allows Apollo Client to avoid fetching redundant data and to easily update parts of the UI when specific data changes.
	2.	In-Memory Cache:
	•	The Apollo Store resides in memory and serves as a fast local cache, reducing the need for repeated network requests for the same data.
	•	It supports caching strategies like cache-first, network-only, or cache-and-network.
	3.	Query Matching:
	•	When you execute a query, Apollo checks the store first to see if the requested data is already available, depending on the cache policy.
	•	If the data is available, it serves it from the cache; otherwise, it fetches from the server.
	4.	Automatic UI Updates:
	•	Changes in the Apollo Store automatically update the components subscribing to the relevant queries, ensuring the UI stays in sync with the state.
	5.	Data Manipulation:
	•	Developers can directly read, write, or modify data in the store using Apollo Client methods like:
	•	cache.readQuery / cache.writeQuery
	•	cache.readFragment / cache.writeFragment
	6.	Support for Optimistic UI:
	•	The Apollo Store allows you to show temporary or “optimistic” updates in the UI before the actual server response is received, enhancing user experience.


# Hot and Cold Cache
Hot Cache and Cold Cache are terms used to describe the state of a cache based on whether the required data is readily available or not. These terms are commonly used in the context of caching systems to explain performance behavior.

## Hot Cache
A hot cache refers to a cache that has the requested data readily available. This typically happens when:
	•	The data has been accessed recently and is still stored in the cache.
	•	The cache is “warmed up,” meaning commonly requested data has been preloaded into it.

Characteristics:

	•	Fast Access: Data retrieval is quick because it avoids the need for fetching data from the original source (e.g., database, server).
	•	Efficient: Hot caches improve system performance by reducing latency and backend load.
	•	Example:
	•	A user queries a popular endpoint, and the response is served instantly because the data is already in the cache.

## Cold Cache
A cold cache refers to a cache that does not have the requested data. This usually happens when:
	•	The cache is newly initialized or has been cleared.
	•	The requested data has expired or been evicted from the cache.
	•	The data has never been requested before and is not preloaded.

Characteristics:

	•	Slower Access: Data retrieval takes longer because the system must fetch it from the original source (e.g., database, API).
	•	Higher Load: Backend systems experience higher load as they handle requests that miss the cache.
	•	Example:
	•	After a cache reset, the first request to an endpoint is a “cache miss,” and the system retrieves the data from the database before storing it in the cache.

## Implications in System Design
	•	Hot Cache: Optimal for performance. Systems aim to keep caches hot by preloading or predicting frequently accessed data.
	•	Cold Cache: Leads to slower responses and higher backend loads. Strategies like cache warming or priming are used to mitigate this.

## Use Cases in Practice
	•	Web Applications: Frequently accessed pages or assets are cached to ensure a hot cache, providing faster page loads.
	•	API Gateways: Cache popular API responses to avoid hitting backend servers.
	•	Database Queries: Results of commonly executed queries are cached to improve performance.

Understanding and managing hot and cold caches effectively is essential for designing efficient and responsive systems.