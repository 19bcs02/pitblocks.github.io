const addButton = document.getElementById('addButton');
const nameInput = document.getElementById('name');
const locationInput = document.getElementById('location');
const IDInput = document.getElementById('ID');
const branchTable = document.getElementById('branchTable');

let rowCounter = 1; // Initialize row counter

addButton.addEventListener('click', () => {
  const name = nameInput.value;
  const location = locationInput.value;
  const ID = `${name.substring(0, 3).toUpperCase()}${location.substring(0, 3).toUpperCase()}${rowCounter}`;

  if (name && location && ID) {
    // Create the custom HTML content as a string
    const customRowHtml = `
      <tr>
        <td>
          <div class="d-flex px-2 py-1">
            <div>
            
            </div>
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 text-sm">${rowCounter}</h6>
              <p class="text-xs text-secondary mb-0"></p>
            </div>
          </div>
        </td>
        <td>
          <p class="text-xs font-weight-bold mb-0">${name}</p>
        </td>
        <td class="align-middle text-center text-sm">
          <span class="badge badge-sm bg-gradient-success">${location}</span>
        </td>
        <td class="align-middle text-center">
          <span class="text-secondary text-xs font-weight-bold">${ID}</span>
        </td>
        <td class="align-middle">
          <a href="javascript:;" class="badge badge-sm bg-gradient-success text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
            DELETE
          </a>
        </td>
      </tr>
    `;

    // Insert the custom row HTML into the table
    branchTable.insertAdjacentHTML('beforeend', customRowHtml);

    // Clear input values
    rowCounter++;
    nameInput.value = '';
    locationInput.value = '';
    IDInput.value = '';
  }
});
