        fetchDogBreeds();
        function fetchDogBreeds() {
            // ajax kutsu dog apiin koirarotulistasta
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);

                    // valitse rotu listasta
                    var breeds = Object.keys(data.message);

                    populateBreedDropdown(breeds);
                }
            };

            xhr.open('GET', 'https://dog.ceo/api/breeds/list/all', true);
            xhr.send();
        }

        function populateBreedDropdown(breeds) {
            var breedSelect = document.getElementById('breedSelect');

            breeds.forEach(function (breed) {
                var option = document.createElement('option');
                option.value = breed;
                option.textContent = breed;
                breedSelect.appendChild(option);
            });
        }

        function fetchBreedImage() {
            // valittu rotu
            var selectedBreed = document.getElementById('breedSelect').value;

            // ajax kutsu rodun edustajan kuvasta
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);

                    var imageUrl = data.message;

                    displayBreedImage(imageUrl);
                }
            };

            xhr.open('GET', 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random', true);
            xhr.send();
        }

        function displayBreedImage(imageUrl) {
            // poista edellisen haun tulokset
            document.getElementById('imageContainer').innerHTML = '';

            var imageContainer = document.getElementById('imageContainer');
            var img = document.createElement('img');
            img.src = imageUrl;
            imageContainer.appendChild(img);
        }
    