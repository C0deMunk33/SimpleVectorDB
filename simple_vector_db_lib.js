async function create_simple_vector_db_collection(collection_name, url) {
		let insert_response = await fetch(url + "/create_collection", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name, dimension: 768 })
		});
	}

	async function insert_simple_vector_db(collection_name, vectors, url) {
		let insert_response = await fetch(url + "/add_document", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name, vectors: vectors })
		});
	}
	// delete a collection from simple vector db
	async function delete_simple_vector_db_collection(collection_name, url) {
		let insert_response = await fetch(url + "/delete_collection", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name })
		});
	}

	// delete a document from simple vector db
	async function delete_simple_vector_db_document(collection_name, document_id, url) {
		let insert_response = await fetch(url + "/delete_document", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name, document_id: document_id })
		});

	}
	//get_document_by_id
	async function get_document_by_id(collection_name, document_id, url) {
		let insert_response = await fetch(url + "/get_document_by_id", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name, document_id: document_id })
		});
		return insert_response.json();
	}
	//get_document_by_title
	async function get_document_by_title(collection_name, title, url) {
		let insert_response = await fetch(url + "/get_document_by_title", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name, title: title })
		});
		return insert_response.json();
	}
	//get_similar_documents_by_cos
	async function get_similar_documents_by_cos(collection_name, document_id, top_k, url) {
		let insert_response = await fetch(url + "/get_similar_documents_by_cos", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name, document_id: document_id, top_k: top_k })
		});
		return insert_response.json();
	}

	//get_similar_documents_by_euclidean
	async function get_similar_documents_by_euclidean(collection_name, document_id, top_k, url) {
		console.log(url)
		let insert_response = await fetch(url + "/get_similar_documents_by_euclidean", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name, document_id: document_id, top_k: top_k })
		});
		return insert_response.json();
	}

	//collection_exists
	async function collection_exists(collection_name, url) {
		let insert_response = await fetch(url + "/collection_exists", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ collection_name: collection_name })
		});
		return insert_response.json();
	}
