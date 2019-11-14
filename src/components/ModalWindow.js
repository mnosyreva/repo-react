import React from 'react'

export const ModalWindow = () => (
    <div className="modal" tabindex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Действительно хотите удалить группу?</p>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Отмена</button>
        <button type="button" className="btn btn-primary">Удалить</button>
      </div>
    </div>
  </div>
</div>
)