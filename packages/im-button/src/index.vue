<template>
    <button class="im-button"
        @click="handleClick"
        :disabled="disabled || loading"
        :type="nativeType"
        :class="[
            type ? 'im-button--' + type : '',
            size ? 'im-button--' + size : '',
            {
                'is-disabled': disabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle,
            }
        ]"
        >
        <i class="im-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>

export default {
    name: 'ImButton',
    props: {
        type: {
            type: String,
            default: 'default',
        },
        size: String,
        icon: {
            type: String,
            default: '',
        },
        plain: Boolean,
        round: Boolean,
        loading: Boolean,
        disabled: Boolean,
        circle: Boolean,
        nativeType: {
            type: String,
            default: 'button',
        }
    },
    data() {
        return {
        }
    },
    computed: {

    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt)
        }
    }
}
</script>

<style lang="less" scoped>
.im-button {
    display: inline-block;
    line-height: 1;
    margin: 0;
    padding: 12px 20px;
    border-radius: 40x;
    background: #fff;
    outline: 0;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    box-sizing: border-box;
    cursor: pointer;
    color: #606266;
    border: 1px solid #dcdfe6;
}

.im-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}
.im-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
.im-button.is-loading {
    position: relative;
    pointer-events: none;
}
.im-button.is-disabled {
    cursor: not-allowed;
}

//  sizing

.im-button--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
}

.im-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}

.im-button--mediun {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}


// text

.im-button--text {
    border: transparent;
    background: transparent;
    color: #409eff;
    padding: 0;
}
.im-button--text.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
}

// primary

.im-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.im-button--primary.is-disabled {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
    cursor: not-allowed;
}
.im-button--primary.is-plain {
    color: #409eff;
    background-color: #ecf5ff;
    border-color: #b3d8ff;
}
.im-button--primary.is-plain.is-disabled {
    color: #8cc5ff;
    background-color: #d9ecff;
    border-color: #d9ecff;
}

// success

.im-button--success {
    color: #fff;
    background: #67c23a;
    border: 1px solid #67c23a;
}
.im-button--success.is-disabled {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.im-button--success.is-plain {
    color: #67c23a;
    background-color: #f0f9eb;
    border-color: #c2e7b0;
}
.im-button--success.is-plain.is-disabled {
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
}

// info
.im-button--info {
    color: #fff;
    background: #909399;
    border: 1px solid #909399;
}
.im-button--info.is-disabled {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.im-button--info.is-plain {
    color: #909399;
    background-color: #f4f4f5;
    border-color: #d3d4d6;
}
.im-button--info.is-plain.is-disabled {
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
}

// warning 
.im-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
}

.im-button--warning.is-disabled {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.im-button--warning.is-plain {
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #f5dab1;
}
.im-button--warning.is-plain.is-disabled {
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
}

// danger

.im-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
}
.im-button--danger.is-disabled {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
.im-button--danger.is-plain {
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fbc4c4;
}
.im-button--danger.is-plain.is-disabled {
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
}
</style>