import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import VarReferencePicker from '../_base/components/variable/var-reference-picker'
import useConfig from './use-config'
import { mockData } from './mock'
import Field from '@/app/components/workflow/nodes/_base/components/field'

const i18nPrefix = 'workflow.nodes.knowledgeRetrieval'

const Panel: FC = () => {
  const { t } = useTranslation()
  const readOnly = false

  const {
    inputs,
    handleQueryVarChange,
  } = useConfig(mockData)

  return (
    <div className='mt-2'>
      <div className='px-4 pb-4 space-y-4'>
        <Field
          title={t(`${i18nPrefix}.queryVariable`)}
        >
          <VarReferencePicker
            readonly={readOnly}
            isShowNodeName
            value={inputs.query_variable_selector}
            onChange={handleQueryVarChange}
          />
        </Field>
      </div>
    </div>
  )
}

export default Panel